const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
		session:false,
		user:{},
		openMregister: "none",
		openMuserexist:"none",
		opeRComprob:"none",
		openError:"none"
		},
		actions: {
			userexist:async(emailUser) =>{
				try{
					const resp = await fetch('https://literate-space-spork-66997qq6qvfrjq5-3001.app.github.dev/api/user', {
						method:"GET",
						headers:{"Content-Type": "application/json"}
					});
					if (resp.ok) {
						const userData = await resp.json();
            			console.log(userData);
						if(userData.includes(emailUser)){
							return true 
						}else{
							return false
						}
					} else {
						console.error("Error al obtener datos de la API. Respuesta completa:", await resp.text());
					}
					
				}catch (error){
					console.error({error})
					return
				}
			},
			userRegister: async(data_user) =>{
				try{
					const resp = await fetch('https://literate-space-spork-66997qq6qvfrjq5-3001.app.github.dev/api/signup', {
						method:"POST",
						body: JSON.stringify(data_user),
						headers:{"Content-Type": "application/json",},
					});
					if (resp.ok) {
						console.log ("realizado");
						if (resp.status ===201){
							return true;
						}else{
							return false;
						}
						
						
					} else {
						console.error("Error al obtener datos de la API. Respuesta completa:", await resp.text());
					}
					
				}catch (error){
					console.error({error})
					return
				}
			},
			login:async(data) =>{
				try{
					const resp = await fetch('https://literate-space-spork-66997qq6qvfrjq5-3001.app.github.dev/api/login', {
						method:"POST",
						body: JSON.stringify(data),
						headers:{"Content-Type": "application/json",},
					});
					if (resp.ok) {
						console.log ("realizado");
					
						const dataresp = await resp.json();
						if(resp.status === 201){
							const token =dataresp.token;
						
							localStorage.setItem("token",token);
							const {userdataprofile}=getActions();
							userdataprofile(token);
							setStore({ session:true });
							return "autorizado";
						}
					} else {
						const resperror =  await resp.json();
						console.error("Error al obtener datos de la API. Respuesta completa:",resperror);
						 return resperror
					}
					
				}catch (error){
					console.error({error})
					
				}
			},userdataprofile:async(tuTokenJWT) =>{
				try{
					const resp = await fetch('https://literate-space-spork-66997qq6qvfrjq5-3001.app.github.dev/api/private', {
						method:"GET",
						headers:{'Authorization': 'Bearer ' + tuTokenJWT}
					});
					if (resp.ok) {
						console.log ("desde los datos del token userdata private");
					
						const datauser = await resp.json();
						const user =datauser.user;
						
						setStore({ user:user });
						
						
					} else {
						console.error("Error al obtener datos de la API. Respuesta completa:", await resp.text());
						
					}
					
				}catch (error){
					console.error({error})
					return
				}
			},

			// Use getActions to call a function within a fuction
			logout: () => {
				localStorage.removeItem("token");
				setStore({ session: false });

			},
			openModalr:()=>{
				console.log ("desde flux modal usuario registrado exitoso")					
				setStore({openMregister: "flex"})
			},
			closeModalr:()=>{
				setStore({openMregister:"none"});
			},
			openModalUE:()=>{
				console.log ("desdeflux modal usuario existente")
				setStore({openMuserexist: "flex"})
			},
			closeModalUE:()=>{
				setStore({openMuserexist:"none"});
			},
			openModalRC:()=>{
				console.log ("desdeflux modal usuario existente")
				setStore({opeRComprob: "flex"})
			},
			closeModalRC:()=>{
				setStore({opeRComprob:"none"});
			},
			openErrorlogin:()=>{
				console.log ("desdeflux modal error login")
				setStore({openError: "flex"});
			},
			closeErrorlogin:()=>{
				setStore({openError:"none"});
			}
	}
};
}

export default getState;
