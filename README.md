# JS E-Commerce

1. Criar Estrutura de Pastas
   1. criar pasta raiz com o nome de jsecommerce
   2. adicionar pasta de frontend e backend
   3. criar pasta /src e outra com o nome de /public na pasta frontend
   4. crie index.html com o título jsecommerce em /public
   5. TERMINAL: execute npm init na pasta frontend
   6. TERMINAL: npm install -D live-server
   7. JSON: adicione o comando start como live-server src --verbose
   8. TERMINAL: execute npm start
   9. verificar o resultado

2. Design Website
   1. CSS: criar style.css
   2. HTML: vincule style.css a index.html
   3. HTML: criar div.grid-container
   4. HTML: criar header, main e footer
   5. CSS: estilizar html, body
   6. CSS: estilizar .grid-container, header, main e footer

3. Criar tela inicial estática
   1. HTML: criar ul.products
   2. HTML: criar li
   3. HTML: criar div.product
   4. HTML: adicionar .product-image, .product-name, .product-brand, .product-price
   5. CSS: estilIZAR ul.products e divs internos
   6. HTML: duplique 2 vezes para mostrar 3 produtos

4. Renderizar tela inicial dinâmica
   1. JS: criar data.js
   2. JS: exporte uma variedade de 6 produtos
   3. JS: criar screens/HomeScreen.js
   4. JS: exportar HomeScreen como um objeto com o método render()
   5. JS: implementar render()
   6. JS: import data.js
   7. JS: retornar produtos mapeados para as li's dentro da ul
   8. JS: criar app.js
   9. HTML: vincule-o a index.html como módulo
   10. HTML: definir id principal para main-container
   11. JS: criar função de router()
   12. JS: defina main_container innerHTML para HomeScreen.render ()
   13. JS: definir o evento load do objeto window para a função do router()

