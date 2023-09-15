## Calculadora Online

Criei um servidor com 4 rotas _GET_ para executar as 4 operações básicas da matemática (somar, subtrair, multiplicar, dividir)

Todas as rotas esperaram dois parâmetros query **num1** e **num2** e retornam as respostas das operações.

### Exemplos de requisições e respostas:

_Para a requisição na rota `/somar` utilizando `num1=10` e `num2=5` deveremos retornar `15`_

Requisição

```javascript
/somar?num1=10&num2=5
```

Resposta

```javascript
15
```

_Para a requisição na rota `/subtrair` utilizando `num1=10` e `num2=5` deveremos retornar `5`_

Requisição

```javascript
/subtrair?num1=10&num2=5
```

Resposta

```javascript
5
```

_Para a requisição na rota `/multiplicar` utilizando `num1=10` e `num2=5` deveremos retornar `50`_

Requisição

```javascript
/multiplicar?num1=10&num2=5
```

Resposta

```javascript
50
```

_Para a requisição na rota `/dividir` utilizando `num1=10` e `num2=5` deveremos retornar `2`_

Requisição

```javascript
/dividir?num1=10&num2=5
```

Resposta

```javascript
2
```
