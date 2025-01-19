import httpInstance from "@/utils/http.js";

export const getListAPI = () => {
    return httpInstance({
      url:'/main'
    })
  }

  export const removeListAPI = (data) => {
    return httpInstance({
      url:'/delete',
      method:'POST',
      data
    })
  }

  export const startListAPI = (data) => {
    return httpInstance({
      url:'/start',
      method:'POST',
      data
    })
  }

  export const addListAPI = (data) => {
    return httpInstance({
      url:'/create',
      method:'POST',
      data
    })
  }

  export const resetListAPI = (data) => {
    return httpInstance({
      url:'/remake',
      method:'POST',
      data
    })
  }