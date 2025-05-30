# Imagem base do Node.js
FROM node:18-alpine

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o código fonte
COPY . .

# Construir a aplicação
RUN npm run build

# Instalar servidor web para servir a aplicação
RUN npm install -g serve

# Expor a porta que a aplicação usa
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["serve", "-s", "dist", "-l", "3001"] 