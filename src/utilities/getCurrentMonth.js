const getCurrentMonth = () => {

    const month = new Date().getMonth() + 1
    if(month < 10) {
      return `0${month}`
    }
    return month

}

export default getCurrentMonth;