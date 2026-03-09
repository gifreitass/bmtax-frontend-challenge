## Problema
TypeError: Cannot read properties of null (reading 'map')

O erro mostra que o código tentou executar o map em uma variável nula

## Possíveis causas do problema
O estado inicial pode ter sido definido como null, ou pode ter ocorrido algum erro na requisição da API.

## Soluções
- Iniciar o estado com um array vazio []
- Fazer uma verificação antes de renderizar:
{products && products.map(...)} ou {products?.map(...)}