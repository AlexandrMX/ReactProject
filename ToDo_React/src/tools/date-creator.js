

const createDate = () => {
   return new Date().toJSON().slice(0, 10).replace(/-/g, '/')
}

export default createDate;