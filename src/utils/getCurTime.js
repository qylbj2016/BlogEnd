function getCurTime() {
	var date = new Date()
	var seperator1 = '/'
	var month = date.getMonth() + 1<10? '0'+(date.getMonth() + 1):date.getMonth() + 1
	var strDate = date.getDate()<10? '0' + date.getDate():date.getDate()
	var curTime = date.getFullYear() + seperator1  + month  + seperator1  + strDate
	return curTime
}

export default getCurTime