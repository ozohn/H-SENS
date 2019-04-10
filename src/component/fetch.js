const useFetch = async (dataUrl, method, headersObj, body) => {
  try {
    const fetchedRes = await fetch(dataUrl, {
      method : method,
      headers: headersObj,
      body: body
    });
    checkStatusNum(fetchedRes.status)
    const jsonData = await fetchedRes.json();
    return jsonData;
  } catch (err) {
    return console.log(err)
  }
}

const checkStatusNum = (statusNum) => {
  if(400 <= statusNum && statusNum < 500) {
    throw new Error('잘못된 요청입니다.')
  } else if (500 <=statusNum) {
    throw new Error('현재 서버가 박살난 상태입니다.')
  }
}

export default useFetch