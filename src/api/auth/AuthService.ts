import { client } from '../HttpClient'

const POST_CREATEUSER = '/auth/create/'
const POST_SIGNINUSER = '/auth/signin/'

const createUser = (username: string, password: string, answer: string) => 
    client.post(POST_CREATEUSER, {data:{username: username, password:password, answer:answer}}) 

const signInUser = (username: string, password: string) => 
    client.post(POST_SIGNINUSER, {data:{username:username,password:password}})

export {
    createUser,
    signInUser
}