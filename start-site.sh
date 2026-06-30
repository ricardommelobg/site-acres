#!/bin/bash

echo "====================================="
echo "   Iniciando Novo Site Acres (Vite)  "
echo "====================================="

# Navega para o diretório do novo site
cd /home/ricardo/site-acres || { echo "Diretório não encontrado"; exit 1; }

# Executa o servidor de desenvolvimento aberto na rede local (com --force para limpar o cache)
npm run dev -- --host --force
