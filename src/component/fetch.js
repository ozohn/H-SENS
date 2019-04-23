const checkStatusNum = statusNum => {
  if (statusNum >= 400 && statusNum < 500) {
    throw new Error('잘못된 요청입니다.');
  } else if (statusNum >= 500) {
    throw new Error('현재 서버가 박살난 상태입니다.');
  }
};

const useFetch = async (dataUrl, httpMethod, headersObj, bodyData) => {
  try {
    const fetchedRes = await fetch(dataUrl, {
      method: httpMethod,
      headers: headersObj,
      body: bodyData,
    });
    checkStatusNum(fetchedRes.status);
    const jsonData = await fetchedRes.json();
    return jsonData;
  } catch (err) {
    return err.message;
  }
};

export default useFetch;
