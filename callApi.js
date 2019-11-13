window.onload = () => {


	getResponse();

	async function getResponse(){
		const response = await fetch('central_eletronica.php');
		const a = {

		}
		const data = await response.text();
		console.log(data);

		const js = JSON.stringify(data);
		const obj = JSON.parse(js);

		console.log(typeof(obj));
	} 
}