# projeto-la-boleria
Neste projeto foi desenvolvido o back-end e o banco de dados de um gerenciador de pedidos para uma loja de bolos.

Para o Back-end as seguintes implementações foram obrigatórias:

- Cada recurso deve ter:
    - Seu próprio arquivo de rota.
    - Seu próprio controller.
    - Implementar seu próprio Schema nas rotas do tipo POST.
    - Caso necessário, fazer uso de middlewares.

Para isso, crie um banco de dados que deve ter as seguintes tabelas:

- **cakes**
    - `id` → serial
    - `name` → varchar
    - `price` → numeric
    - `image` → varchar
    - `description` → text
- **clients**
    - `id` → serial
    - `name` → varchar
    - `address` → varchar
    - `phone` → varchar
- **orders**
    - `id` → serial
    - `clientId` → integer
    - `cakeId` → integer
    - `quantity` → integer
    - `createdAt` → timestamp
    - `totalPrice` → numeric
    
    A rotas na API devem retornar o seguinte modelos:

- **POST** `/cakes`
    - Deve receber as informações necessárias para a criação de um novo tipo de bolo.
    
    ```json
    {
    		"name": "Bolo de pote",
    		"price": 13.00,
        "image":"encurtador.com.br/iDIX0",
    		"description": "Bolo de chocolate com recheio de leite ninho"
    }
    ```
    
    - **Response:** status **201**, sem dados.
    - **Regras de negócio**
        - `name` não pode ser **vazio** e deve conter pelo menos 2 caracteres ⇒ deve retornar **status 400.**
        - `name` não pode ser um nome de um bolo já existente ⇒ deve retornar **status 409.**
        - `price` não pode ser **vazio** e deve ser um valor **maior que zero** ⇒ deve retornar **status 400.**
        - `description` pode ser vazia e deve ser validado se é uma **string** ⇒ caso não seja deve retornar **status 400.**
        - `image` não pode ser vazio e deve ser um link válido (procurar por validação de link no `Joi`) ⇒ deve retornar **status 422.**
        
- **POST** `/clients`
    - Deve receber as informações necessárias para a criação de um novo cliente.
    
    ```json
    {
        "name": "Fulana",
        "address": "Rua tal",
        "phone": "2199999999"
    }
    ```
    
    - **Response:** status **201**, sem dados.
    - **Regras de negócio**
        - `name` não pode ser **vazio** ⇒  deve retornar **status 400.**
        - `address` não pode ser **vazio** ⇒ deve retornar **status 400.**
        - `phone` não pode ser vazio e deve ser uma **string** com 10 ou 11 caracteres numéricos ⇒ nesse caso deve retornar **status 400.**
        
- **POST** `/order`
    - Deve receber as informações necessárias para registrar um novo pedido.
    
    ```json
    {
        "clientId": 1,
        "cakeId": 1,
        "quantity": 2,
        "totalPrice": 26.00
    }
    ```
    
    - **Response:** status **201**, sem dados.
    - **Regras de negócio**
        - `clientId` deve ser um id de um cliente existente ⇒ caso não exista, retornar **status 404.**
        - `cakeId` deve ser um id de um bolo existente ⇒ caso não exista, retornar **status** **404.**
        - `quantity` deve ser um inteiro maior que zero e menor que 5 ⇒ se não, retornar **status 400.**
        - **OBS*:*** Lembre-se de adicionar o valor ao campo ***createdAt.***
        
- **GET** `/orders`
    - Deve retornar as informações dos pedidos.
    
    Exemplo de retorno:
    
    ```json
    [
       {
    	    "client": {
    	        "id": 1,
    	        "name": "Fulana",
    	        "address": "Rua tal",
    	        "phone": "2199999999"
    	    },
    	    "cake": {
    					"id": 1
    	        "name": "Bolo de pote",
    	        "price": "13.00",
    					"description": "Bolo de chocolate com recheio de leite ninho",
    					"image": "encurtador.com.br/iDIX0"
    	    },
    			"orderId": 1,
    	    "createdAt": "2022-03-16 10:30",
    	    "quantity": 2,
    	    "totalPrice": 26.00
    		}
    ]
    ```
    
    - **Regras de negócio**
        - Pode receber uma **query string** `date` com o formato `YYYY-MM-DD` ⇒ nesse caso deve retornar apenas os pedidos da data especificada.
        - Caso não tenha nenhum pedido ⇒ deve retornar um **array vazio** com **status 404**.
        - Em caso de sucesso ⇒ deve retornar os dados conforme o exemplo com **status 200**.
            
            
- **GET** `/orders/:id`
    - Deve retornar as informações do pedido com id específico, seguindo o formato abaixo.
    
    ```json
    {
        "client": {
            "id": 1,
            "name": "Fulana",
            "address": "Rua tal",
            "phone": "2199999999"
        },
        "cake": {
    				"id": 1
            "name": "Bolo de pote",
            "price": "13.00",
    				"description": "Bolo de chocolate com recheio de leite ninho",
    				"image": "encurtador.com.br/iDIX0"
        },
    		"orderId": 1,
        "createdAt": "2022-03-16 10:30",
        "quantity": 2,
        "totalPrice": 26.00
    }
    ```
    
    - **Regras de negócio**
        - Se o `id` passado não existir ⇒ deve responder com **status 404.**
        - Em caso de sucesso ⇒ deve retornar as informações seguindo o formato do exemplo com **status 200**.
        
- **GET**  `/clients/:id/orders`
    - Deve retornar todos os pedidos de um determinado cliente.
    
    ```json
    [
        {
            "orderId": 1,
            "quantity": 2,
            "createdAt": "2022-03-16 10:30",
            "totalPrice": 26.00,
            "cakeName": "Bolo de pote"
        }
    ]
    ```
    
    - **Regras de negócio**
        - Caso não exista um cliente com o `id` passado ⇒ deve retornar **status 404**.
        - Em caso de sucesso ⇒ deve retornar as informações seguindo o formato do exemplo com **status 200**.
