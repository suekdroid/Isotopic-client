import { AxiosResponse } from 'axios'
import { Note } from '../../model/Types'
import { client } from '../HttpClient'

const POST_ADD_NOTE = '/note/create'
const GET_NOTES = '/note/get'

const addNoteToServer = (note: Note): Promise<AxiosResponse<Note>> => client.post(POST_ADD_NOTE, {data: note})
const getNotesFromServer = (owner: string): Promise<AxiosResponse<Array<Note>>> => client.get(GET_NOTES, {params: {owner: owner}})

export { addNoteToServer, getNotesFromServer }