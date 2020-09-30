class GetProfile {

    async getRandomProfile(){
        const response = await fetch(`https://randomuser.me/api/`);

        const responseData = await response.json();

        return responseData.results;
    }
}


