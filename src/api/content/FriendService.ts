import { AxiosResponse } from 'axios'
import { User } from '../../../../model/Types'
import { client } from '../HttpClient'

const GET_USER='/user/get'
const GET_QUERY_FRIENDS='/friend/query'
const POST_ADD_FRIEND='/friend/add'
const POST_REMOVE_FRIEND = '/friend/remove'

const getUser = (username: string): Promise<AxiosResponse<User>> => {
    return client.get(GET_USER, {params: {username: username}})
}

const findFriends = (queryString: string): Promise<AxiosResponse<Array<User>>> => {
    return client.get(GET_QUERY_FRIENDS, {params: {queryString: queryString}})
}

const addFriend = (user: User): Promise<AxiosResponse<User>> => {
    return client.post(POST_ADD_FRIEND, {data: user})
}

const removeFriend = (user: User): Promise<AxiosResponse<User>> => {
    return client.post(POST_REMOVE_FRIEND, {data: user})
}

export { getUser, findFriends, addFriend, removeFriend }