export default function getBase64(file, setUserImage) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setUserImage(reader.result);
  };
  reader.onerror = error => {
    throw error.message;
  };
}
