const checkStatusNum = statusNum => {
  if (statusNum === 401) {
    throw new Error('일치하는 정보 없음');
  } else if (statusNum >= 500) {
    throw new Error('서버 관련 에러');
  } else if (statusNum >= 400 && statusNum < 500) {
    throw new Error('클라이언트 에러');
  }
};

const fetchData = async (dataUrl, httpMethod, headersObj, bodyData) => {
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

export default fetchData;
