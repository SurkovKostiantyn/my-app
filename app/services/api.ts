// services/api.ts
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
    return axios.get(`${API_URL}/posts`);
};

export const fetchPostById = async (id: number) => {
    return axios.get(`${API_URL}/posts/${id}`);
};

export const fetchCommentsByPostId = async (id: number) => {
    return axios.get(`${API_URL}/posts/${id}/comments`);
};

export const fetchUsers = async () => {
    return axios.get(`${API_URL}/users`);
};

export const fetchUserById = async (id: number) => {
    return axios.get(`${API_URL}/users/${id}`);
};
