import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
    const {method, url} = req

    if (method === "GET" && url ==='/usuario') {
        if (users.length === 0) {
            return res.end('Nenhum usuário encontrado.')
        }
        return res.end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/usuario') {
        users.push({
            id: 1,
            nome: 'Luan Oliveira'
        })
        return res.end('Usuario criado com sucesso!')
    }

    if (method === 'GET' && url === '/produtos') {
        if (users.length === 0) {
            return res.end('Nenhum produto encontrado.')
        } else {
            return res.end(JSON.stringify(users))
        }
    }

    if (method === 'PATCH' && url === '/produtos') {
        if (users.length !== 0) {
            users[0].produto = 'Produto 1';

            return res.end('Atualização de usuario efetuada!')
        } else {
            return res.end('Nenhum Produto encontrado')
        }
    }

    return res.end('Pagina inicial')
})

server.listen(3001);