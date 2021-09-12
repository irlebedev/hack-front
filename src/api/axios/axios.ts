import axios from "axios";

export const instance = axios.create({
  baseURL: "https://some-domain.com/api/",
});

export const getAllUsersForReview = axios.get('http://localhost:8080/plans/review', {
  headers: {
    authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjExOTAsInN1YiI6IjExOTAiLCJqdGkiOiIxNDE2YTQwOS0yODJjLTQ4YjEtYTI0MC0zYzk4MGQ0ZWE2OGMiLCJleHAiOjE2MzQwMzE3NTF9.KWTngWgQlMGgQD2P9ItUaeSD68z6ArYHi7z9AMXIwKoWdpylUMD6Dmecn8vVWa2SMaKuvtHfOacbPw5Uf8lf6A'
  },
});

export const getEmployees = axios.get('http://localhost:8080/users', {
  headers: {
    authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjExOTAsInN1YiI6IjExOTAiLCJqdGkiOiIxNDE2YTQwOS0yODJjLTQ4YjEtYTI0MC0zYzk4MGQ0ZWE2OGMiLCJleHAiOjE2MzQwMzE3NTF9.KWTngWgQlMGgQD2P9ItUaeSD68z6ArYHi7z9AMXIwKoWdpylUMD6Dmecn8vVWa2SMaKuvtHfOacbPw5Uf8lf6A'
  }
});

export const getCurrentIDP = axios.get(`http://localhost:8080//plans/current`, {
  headers: {
    authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjExOTAsInN1YiI6IjExOTAiLCJqdGkiOiIxNDE2YTQwOS0yODJjLTQ4YjEtYTI0MC0zYzk4MGQ0ZWE2OGMiLCJleHAiOjE2MzQwMzE3NTF9.KWTngWgQlMGgQD2P9ItUaeSD68z6ArYHi7z9AMXIwKoWdpylUMD6Dmecn8vVWa2SMaKuvtHfOacbPw5Uf8lf6A'
  },
});

export const getAllIDP = axios.get('http://localhost:8080/plans/my', {
  headers: {
    authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjExOTAsInN1YiI6IjExOTAiLCJqdGkiOiIxNDE2YTQwOS0yODJjLTQ4YjEtYTI0MC0zYzk4MGQ0ZWE2OGMiLCJleHAiOjE2MzQwMzE3NTF9.KWTngWgQlMGgQD2P9ItUaeSD68z6ArYHi7z9AMXIwKoWdpylUMD6Dmecn8vVWa2SMaKuvtHfOacbPw5Uf8lf6A'
  },
});


export const getIDPByID = (id: string) => 
  axios.delete(`http://localhost:8080/plans/${id}`, {
    headers: {
      authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjExOTAsInN1YiI6IjExOTAiLCJqdGkiOiIxNDE2YTQwOS0yODJjLTQ4YjEtYTI0MC0zYzk4MGQ0ZWE2OGMiLCJleHAiOjE2MzQwMzE3NTF9.KWTngWgQlMGgQD2P9ItUaeSD68z6ArYHi7z9AMXIwKoWdpylUMD6Dmecn8vVWa2SMaKuvtHfOacbPw5Uf8lf6A'
    },
  });

export const createIDP = (data: any) => axios.post("http://localhost:8080/plans/", {
    headers: {
      authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjExOTAsInN1YiI6IjExOTAiLCJqdGkiOiIxNDE2YTQwOS0yODJjLTQ4YjEtYTI0MC0zYzk4MGQ0ZWE2OGMiLCJleHAiOjE2MzQwMzE3NTF9.KWTngWgQlMGgQD2P9ItUaeSD68z6ArYHi7z9AMXIwKoWdpylUMD6Dmecn8vVWa2SMaKuvtHfOacbPw5Uf8lf6A',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
    body: {
      data
    }
  });

export const updateIDP = (id: string) => 
  axios.put(`http://localhost:8080/plans/${id}`, {
    headers: {
      authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjExOTAsInN1YiI6IjExOTAiLCJqdGkiOiIxNDE2YTQwOS0yODJjLTQ4YjEtYTI0MC0zYzk4MGQ0ZWE2OGMiLCJleHAiOjE2MzQwMzE3NTF9.KWTngWgQlMGgQD2P9ItUaeSD68z6ArYHi7z9AMXIwKoWdpylUMD6Dmecn8vVWa2SMaKuvtHfOacbPw5Uf8lf6A'
    },
  });

export const deleteIDP = (id: string) => 
  axios.delete(`http://localhost:8080/delete/${id}`, {
    headers: {
      authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjExOTAsInN1YiI6IjExOTAiLCJqdGkiOiIxNDE2YTQwOS0yODJjLTQ4YjEtYTI0MC0zYzk4MGQ0ZWE2OGMiLCJleHAiOjE2MzQwMzE3NTF9.KWTngWgQlMGgQD2P9ItUaeSD68z6ArYHi7z9AMXIwKoWdpylUMD6Dmecn8vVWa2SMaKuvtHfOacbPw5Uf8lf6A'
    },
  });