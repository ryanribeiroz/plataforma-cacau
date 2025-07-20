// FUNCIONALIDADE SPEECH - LEITURA DA PÁGINA COM CONTROLES
document.addEventListener('DOMContentLoaded', function() {
    const btnSpeech = document.getElementById('btn-speech');
    const speechControls = document.getElementById('speech-controls');
    const speedSlider = document.getElementById('speed-slider');
    const speedValue = document.getElementById('speed-value');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const btnPause = document.getElementById('btn-pause');
    const btnResume = document.getElementById('btn-resume');
    const btnRestart = document.getElementById('btn-restart');
    const btnStop = document.getElementById('btn-stop');
    
    // Variáveis globais para controle
    let isReading = false;
    let isPaused = false;
    let utterance = null;
    let currentText = '';
    let currentSpeed = 0.8;
    let textChunks = [];
    let currentChunk = 0;
    let totalChunks = 0;
    
    // Função para dividir texto em chunks para melhor controle
    function splitTextIntoChunks(text, maxLength = 200) {
        const sentences = text.match(/[^\.!?]+[\.!?]+/g) || [text];
        const chunks = [];
        let currentChunk = '';
        
        sentences.forEach(sentence => {
            if ((currentChunk + sentence).length > maxLength && currentChunk) {
                chunks.push(currentChunk.trim());
                currentChunk = sentence;
            } else {
                currentChunk += sentence;
            }
        });
        
        if (currentChunk.trim()) {
            chunks.push(currentChunk.trim());
        }
        
        return chunks;
    }
    
    // Função para obter o texto da página
    function getPageText() {
        const container = document.querySelector('.container, main');
        if (container) {
            const clone = container.cloneNode(true);
            const elementsToRemove = clone.querySelectorAll('button, script, style, .btn, .controles-acessibilidade, .speech-controls');
            elementsToRemove.forEach(el => el.remove());
            return clone.innerText.trim();
        }
        return document.body.innerText.trim();
    }
    
    // Função para atualizar progresso
    function updateProgress() {
        if (totalChunks > 0) {
            const progress = ((currentChunk) / totalChunks) * 100;
            progressFill.style.width = progress + '%';
            progressText.textContent = Math.round(progress) + '%';
        }
    }
    
    // Função para falar um chunk
    function speakChunk(chunkIndex) {
        if (chunkIndex >= textChunks.length) {
            finishReading();
            return;
        }
        
        currentChunk = chunkIndex;
        updateProgress();
        
        utterance = new SpeechSynthesisUtterance(textChunks[chunkIndex]);
        utterance.lang = 'pt-BR';
        utterance.rate = currentSpeed;
        utterance.pitch = 1;
        utterance.volume = 1;
        
        utterance.onend = function() {
            if (!isPaused && isReading) {
                speakChunk(currentChunk + 1);
            }
        };
        
        utterance.onerror = function(event) {
            console.error('Erro na leitura:', event.error);
        };
        
        speechSynthesis.speak(utterance);
    }
    
    // Função para iniciar a leitura
    function startReading() {
        speechSynthesis.cancel();
        
        currentText = getPageText();
        if (!currentText) {
            alert('Nenhum conteúdo encontrado para leitura.');
            return;
        }
        
        textChunks = splitTextIntoChunks(currentText);
        totalChunks = textChunks.length;
        currentChunk = 0;
        isReading = true;
        isPaused = false;
        
        showControls();
        updateButton();
        updateProgress();
        speakChunk(0);
    }
    
    // Função para pausar
    function pauseReading() {
        speechSynthesis.pause();
        isPaused = true;
        btnPause.style.display = 'none';
        btnResume.style.display = 'inline-block';
    }
    
    // Função para retomar
    function resumeReading() {
        speechSynthesis.resume();
        isPaused = false;
        btnPause.style.display = 'inline-block';
        btnResume.style.display = 'none';
    }
    
    // Função para reiniciar
    function restartReading() {
        speechSynthesis.cancel();
        currentChunk = 0;
        isPaused = false;
        updateProgress();
        speakChunk(0);
        btnPause.style.display = 'inline-block';
        btnResume.style.display = 'none';
    }
    
    // Função para parar
    function stopReading() {
        speechSynthesis.cancel();
        finishReading();
    }
    
    // Função para finalizar leitura
    function finishReading() {
        isReading = false;
        isPaused = false;
        hideControls();
        updateButton();
        progressFill.style.width = '0%';
        progressText.textContent = '0%';
    }
    
    // Função para mostrar controles
    function showControls() {
        speechControls.style.display = 'block';
    }
    
    // Função para esconder controles
    function hideControls() {
        speechControls.style.display = 'none';
    }
    
    // Função para atualizar botão principal
    function updateButton() {
        if (isReading) {
            btnSpeech.innerHTML = '🔊 Lendo...';
            btnSpeech.classList.add('reading');
        } else {
            btnSpeech.innerHTML = '🔊 Ouvir Página';
            btnSpeech.classList.remove('reading');
        }
    }
    
    // Função para atualizar velocidade
    function updateSpeed() {
        currentSpeed = parseFloat(speedSlider.value);
        speedValue.textContent = currentSpeed + 'x';
        
        // Se estiver lendo, atualizar a velocidade atual
        if (isReading && utterance) {
            speechSynthesis.cancel();
            speakChunk(currentChunk);
        }
    }
    
    // Event Listeners
    if (btnSpeech) {
        btnSpeech.addEventListener('click', function() {
            if (isReading) {
                stopReading();
            } else {
                startReading();
            }
        });
    }
    
    speedSlider.addEventListener('input', updateSpeed);
    btnPause.addEventListener('click', pauseReading);
    btnResume.addEventListener('click', resumeReading);
    btnRestart.addEventListener('click', restartReading);
    btnStop.addEventListener('click', stopReading);
    
    // Parar leitura quando sair da página
    window.addEventListener('beforeunload', function() {
        if (isReading) {
            speechSynthesis.cancel();
        }
    });
    
    // Inicializar valor de velocidade
    updateSpeed();
});