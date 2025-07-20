# Plataforma Cacau - Páginas Legais com Acessibilidade

## 🌱 Contexto da Plataforma Cacau

A **Plataforma Cacau** é um sistema computacional integrado desenvolvido pela **CEPLAC** (Comissão Executiva do Plano da Lavoura Cacaueira) em parceria com a **Universidade Estadual de Santa Cruz (UESC)** para revolucionar a cacauicultura brasileira.

### 🎯 **Objetivo Principal**
Armazenar e analisar dados de:
- **Eventos fenológicos**: lançamento foliar, floração, produção por planta
- **Fatores ambientais**: manejo, pragas, doenças, clima (chuva, temperatura, vento)
- **Dados de campo**: coletados via aplicativo mobile integrado

### 📊 **Funcionalidades da Plataforma**
- **Mapa em tempo real** dos pontos amostrais
- **Gestão de propriedades** e estratos
- **Controle de usuários** e acesso seguro
- **Geração de relatórios** (Excel/PDF)
- **Aplicativo mobile** para coleta de dados em campo
- **Previsão de safras** e alertas fitossanitários

### 🚜 **Impacto Social**
- Valorização da cacauicultura nacional
- Mudança de parâmetros comportamentais dos agricultores
- Fonte de dados para pesquisas científicas
- Melhoria da agricultura cacaueira e qualidade de vida rural

## 📋 Descrição do Projeto

Páginas de **Política de Privacidade** e **Termos de Uso** para a Plataforma Cacau, em conformidade com a LGPD (Lei Geral de Proteção de Dados). Este projeto oferece uma experiência web moderna e acessível com recursos avançados de acessibilidade.

## ⚖️ Necessidade das Páginas Legais

### 🔒 **Por que são Essenciais?**

A Plataforma Cacau coleta **dados pessoais sensíveis** de agricultores e técnicos:
- **Dados de identificação**: nome, CPF, telefone, e-mail
- **Dados de localização**: coordenadas GPS das propriedades
- **Dados comerciais**: informações sobre produção e safras


### 📜 **Conformidade LGPD**
Como sistema que processa dados pessoais, a plataforma **DEVE** ter:
- **Política de Privacidade**: explicando como os dados são coletados, tratados e protegidos
- **Termos de Uso**: estabelecendo regras e responsabilidades dos usuários

### 🌾 **Foco no Usuário Rural**
As páginas foram desenvolvidas com **linguagem simplificada** para atender:
- **Agricultores familiares** com diferentes níveis de escolaridade
- **Técnicos rurais** que orientam produtores
- **Pesquisadores** que utilizam os dados coletados

### 📚 **Processo de Desenvolvimento**
Desenvolvido como parte do **Projeto Extensionista 2**, este trabalho envolveu:
- **Pesquisa detalhada** da LGPD e regulamentações
- **Capacitação** através de palestras especializadas
- **Uso de engenharia de prompt** para adaptação de linguagem
- **Consultoria gov.br** para diretrizes oficiais
- **Foco em acessibilidade** para inclusão digital rural

## ✨ Recursos Principais

### 🎨 **Modo Escuro Avançado**
- Toggle entre tema claro e escuro
- Persistência de preferência via localStorage
- Transições suaves entre temas
- Paleta de cores otimizada para acessibilidade

### � **Síntese de Voz Avançada**
- Leitura completa do texto em português brasileiro
- Controles avançados de reprodução:
  - ⏯️ Pausar/Retomar
  - ⏹️ Parar
  - 🔄 Reiniciar
  - ⚡ Controle de velocidade (0.25x a 2x)
- Barra de progresso visual em tempo real
- Chunking inteligente do texto para melhor controle

### 📱 **Design Responsivo**
- Layout mobile-first
- Adaptação automática para diferentes tamanhos de tela
- Interface otimizada para dispositivos móveis

### ♿ **Acessibilidade**
- Estrutura semântica HTML5
- Contraste de cores adequado (WCAG)
- Navegação por teclado
- Texto simplificado para usuários rurais

## �📁 Estrutura de Arquivos
```
├── index.html                    # Página inicial de navegação
├── politica-privacidade.html     # Política de Privacidade (LGPD)
├── politica-privacidade.css      # Estilos responsivos + modo escuro
├── termos-de-uso.html            # Termos de Uso
├── termos-de-uso.css             # Estilos responsivos + modo escuro
├── dark-mode.js                  # Funcionalidade de modo escuro
├── speech.js                     # Sistema de síntese de voz
└── img/
    └── logo.png                  # Logotipo da plataforma
```

## 🛠️ Tecnologias e APIs

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design responsivo, animações e modo escuro
- **JavaScript ES6+**: Módulos e funcionalidades interativas

### APIs Web
- **Web Speech API**: Síntese de voz em português
- **localStorage API**: Persistência de preferências
- **Font Awesome**: Biblioteca de ícones profissionais
- **Google Fonts**: Tipografia Roboto otimizada

### Recursos Técnicos
- Design Mobile-First responsivo
- Sistema de temas claro/escuro
- Controles de áudio avançados
- Persistência de estado do usuário

## 🎨 Sistema de Cores

### Tema Claro
- **Verde principal**: `#17451c`
- **Verde secundário**: `#205c28`
- **Fundo**: `#f7f7f7`
- **Texto**: `#333333`
- **Branco**: `#ffffff`

### Tema Escuro
- **Fundo principal**: `#1a1a1a`
- **Fundo secundário**: `#2a2a2a`
- **Verde claro**: `#4ade80`
- **Verde secundário**: `#22c55e`
- **Texto**: `#e5e5e5`

## 🚀 Como Usar

### Instalação
```bash
# Clone ou baixe os arquivos
# Abra index.html em um navegador moderno
```

### Recursos Disponíveis

1. **Navegação**: Use `index.html` para acessar as páginas
2. **Modo Escuro**: Clique no botão 🌙/☀️ no canto superior direito
3. **Leitura de Voz**: 
   - Clique em � para iniciar a leitura
   - Use os controles para pausar/retomar
   - Ajuste a velocidade conforme necessário
   - Acompanhe o progresso na barra visual

## 📱 Compatibilidade

### Navegadores Suportados
- Chrome 71+ (Web Speech API)
- Firefox 62+ (Web Speech API)
- Safari 14.1+ (Web Speech API)
- Edge 79+ (Web Speech API)

### Dispositivos
- Desktop (todas as resoluções)
- Tablets (768px+)
- Smartphones (320px+)

## 🔧 Manutenção

### Comentários de Código
Todos os arquivos contêm comentários detalhados para facilitar:
- Manutenção futura
- Modificações de conteúdo
- Ajustes de estilo
- Debugging

### Atualização de Conteúdo
1. **Textos**: Editar diretamente nos arquivos HTML
2. **Estilos**: Modificar variáveis CSS no topo dos arquivos
3. **Funcionalidades**: Revisar módulos JavaScript comentados

## 📄 Conformidade Legal

### LGPD (Lei Geral de Proteção de Dados)
- Política de privacidade simplificada e clara
- Linguagem acessível para usuários rurais
- Informações sobre coleta e uso de dados
- Direitos dos titulares de dados explicados

### Acessibilidade Digital
- Conformidade com diretrizes WCAG 2.1
- Texto alternativo em imagens
- Navegação por teclado
- Contraste adequado de cores

## 🌱 Características Especiais

### Foco no Usuário Rural
- Linguagem simplificada
- Interface intuitiva
- Recursos de acessibilidade aprimorados
- Design familiar e confiável

### Performance Otimizada
- Carregamento rápido
- Imagens otimizadas
- CSS e JS minificados naturalmente
- Fontes web otimizadas

## 🎓 Desenvolvimento Acadêmico

### 📚 **Contexto Extensionista**
Este projeto foi desenvolvido como parte da disciplina **Projeto Extensionista 2**, conectando conhecimento acadêmico com necessidades reais da sociedade.

### 🤝 **Parcerias Institucionais**
- **CEPLAC**: Comissão Executiva do Plano da Lavoura Cacaueira
- **UESC**: Universidade Estadual de Santa Cruz
- **Governo Federal**: Diretrizes gov.br para documentos legais

### 🧠 **Metodologia de Pesquisa**
- **Capacitação técnica** através de palestras especializadas
- **Pesquisa aplicada** em LGPD e regulamentações
- **Utilização de IA generativa multimodal** para:
  - Levantamento de requisitos técnicos
  - Adaptação de linguagem para diferentes públicos
  - Simplificação de jargões jurídicos
  - Resumos de estudo da LGPD
- **Consultoria oficial** gov.br para melhores práticas

### 🎯 **Objetivos Extensionistas**
- **Inclusão digital** de comunidades rurais
- **Proteção de dados** para agricultores familiares
- **Transparência** no uso de tecnologia no campo
- **Educação jurídica** acessível

## 👨‍💻 Desenvolvido por
**Ryan Ribeiro** - Semestre 2025.1

### Histórico de Desenvolvimento
- ✅ Estrutura base HTML/CSS
- ✅ Conteúdo LGPD em português
- ✅ Design responsivo completo
- ✅ Sistema de modo escuro
- ✅ Síntese de voz avançada
- ✅ Comentários de manutenção
- ✅ Documentação completa

---

**Versão**: 2.0  
**Última atualização**: Julho 2025  
**Status**: Produção ✅

