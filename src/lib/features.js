import moment from 'moment'

const fileFormat = (url = '') => {
  const fileExt = url.split('.').pop().toLowerCase()

  if (['mp4', 'webm', 'ogg'].includes(fileExt)) {
    return 'video'
  }

  if (['mp3', 'wav', 'audio'].includes(fileExt)) {
    return 'audio'
  }

  if (['png', 'jpg', 'jpeg', 'gif'].includes(fileExt)) {
    return 'image'
  }

  return 'file'
}

const transformImage = (url = "", width = 100) => {
  const newUrl = url.replace("upload/", `upload/dpr_auto/w_${width}/`);

  return newUrl;
};

const getLast7Days = () => {
  const currentDate = moment()

  const last7Days = []
  for (let i = 0; i < 7; i++) {
    const dayDate = currentDate.clone().subtract(i, 'days')
    const dayName = dayDate.format('dddd')
    last7Days.unshift(dayName)
  }
  return last7Days
}

const getOrSaveFromStorage = ({ key, value, get }) => {
  if (get)
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : null
  else localStorage.setItem(key, JSON.stringify(value))
}

export { fileFormat, transformImage, getLast7Days, getOrSaveFromStorage }
