import { subscribe, autorun } from 'vue-meteor-tracker'
import { DocumentsCollection } from '/imports/api/documents'
import Sidebar from '/imports/ui/baseComponents/sideBar.vue'

export default {
    components:{
        Sidebar
    },
    data(){
        return{
            // Logo:"https://cdn.builder.io/api/v1/image/assets/TEMP/168622c9c212e41bf09458f78ed79a28208216771c6a4905a337be0aaa6b9ec3?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/168622c9c212e41bf09458f78ed79a28208216771c6a4905a337be0aaa6b9ec3?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/168622c9c212e41bf09458f78ed79a28208216771c6a4905a337be0aaa6b9ec3?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/168622c9c212e41bf09458f78ed79a28208216771c6a4905a337be0aaa6b9ec3?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/168622c9c212e41bf09458f78ed79a28208216771c6a4905a337be0aaa6b9ec3?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/168622c9c212e41bf09458f78ed79a28208216771c6a4905a337be0aaa6b9ec3?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/168622c9c212e41bf09458f78ed79a28208216771c6a4905a337be0aaa6b9ec3?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/168622c9c212e41bf09458f78ed79a28208216771c6a4905a337be0aaa6b9ec3?apiKey=b77f07679fcf45ae9688b8885c4edc21&",
            // Folder:"https://cdn.builder.io/api/v1/image/assets/TEMP/c714d1ac4cd22bddc02656d3727bf8e1c63b31bfe045a398959010449382bfd1?apiKey=b77f07679fcf45ae9688b8885c4edc21&",
            RightArrow :"https://cdn.builder.io/api/v1/image/assets/TEMP/0664bd45974aaa665dc3a15957236348dacf7dde76156d0c3a7ae714e84e0a49?apiKey=b77f07679fcf45ae9688b8885c4edc21&",
            rightArrow:"https://cdn.builder.io/api/v1/image/assets/TEMP/7ad41ae82dd64c7b3b73a2eb6f487d6e1ec66c8c09aedcae11c35846dc4f60b2?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ad41ae82dd64c7b3b73a2eb6f487d6e1ec66c8c09aedcae11c35846dc4f60b2?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ad41ae82dd64c7b3b73a2eb6f487d6e1ec66c8c09aedcae11c35846dc4f60b2?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ad41ae82dd64c7b3b73a2eb6f487d6e1ec66c8c09aedcae11c35846dc4f60b2?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ad41ae82dd64c7b3b73a2eb6f487d6e1ec66c8c09aedcae11c35846dc4f60b2?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ad41ae82dd64c7b3b73a2eb6f487d6e1ec66c8c09aedcae11c35846dc4f60b2?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ad41ae82dd64c7b3b73a2eb6f487d6e1ec66c8c09aedcae11c35846dc4f60b2?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ad41ae82dd64c7b3b73a2eb6f487d6e1ec66c8c09aedcae11c35846dc4f60b2?apiKey=b77f07679fcf45ae9688b8885c4edc21&",
            leftArrow:"https://cdn.builder.io/api/v1/image/assets/TEMP/02eba9728cb367fd54502106e5d7a5656351021ae66cfd8c425edf1254f31133?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=100   100w,https://cdn.builder.io/api/v1/image/assets/TEMP/02eba9728cb367fd54502106e5d7a5656351021ae66cfd8c425edf1254f31133?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=200   200w,https://cdn.builder.io/api/v1/image/assets/TEMP/02eba9728cb367fd54502106e5d7a5656351021ae66cfd8c425edf1254f31133?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=400   400w,https://cdn.builder.io/api/v1/image/assets/TEMP/02eba9728cb367fd54502106e5d7a5656351021ae66cfd8c425edf1254f31133?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=800   800w,https://cdn.builder.io/api/v1/image/assets/TEMP/02eba9728cb367fd54502106e5d7a5656351021ae66cfd8c425edf1254f31133?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=1200 1200w,https://cdn.builder.io/api/v1/image/assets/TEMP/02eba9728cb367fd54502106e5d7a5656351021ae66cfd8c425edf1254f31133?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=1600 1600w,https://cdn.builder.io/api/v1/image/assets/TEMP/02eba9728cb367fd54502106e5d7a5656351021ae66cfd8c425edf1254f31133?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=2000 2000w,https://cdn.builder.io/api/v1/image/assets/TEMP/02eba9728cb367fd54502106e5d7a5656351021ae66cfd8c425edf1254f31133?apiKey=b77f07679fcf45ae9688b8885c4edc21&",
            SearchIcon:"https://cdn.builder.io/api/v1/image/assets/TEMP/f7928916309cb4b771666f79a7cb52430b86767dbf57c6cd2cf032f18f301320?apiKey=b77f07679fcf45ae9688b8885c4edc21&",
            Pdf:"https://cdn.builder.io/api/v1/image/assets/TEMP/59f4fc905669f8553092eb1758e21197868e539216cdbe7cac8188d39d846d4e?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/59f4fc905669f8553092eb1758e21197868e539216cdbe7cac8188d39d846d4e?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59f4fc905669f8553092eb1758e21197868e539216cdbe7cac8188d39d846d4e?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/59f4fc905669f8553092eb1758e21197868e539216cdbe7cac8188d39d846d4e?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/59f4fc905669f8553092eb1758e21197868e539216cdbe7cac8188d39d846d4e?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59f4fc905669f8553092eb1758e21197868e539216cdbe7cac8188d39d846d4e?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/59f4fc905669f8553092eb1758e21197868e539216cdbe7cac8188d39d846d4e?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/59f4fc905669f8553092eb1758e21197868e539216cdbe7cac8188d39d846d4e?apiKey=b77f07679fcf45ae9688b8885c4edc21&",
            isSmallScreen: false,
            FilePath:["File libraries", 'CMC Documents'],
            documents:[],
            search:false,
            query:''
        }
    },
    mounted() {
        subscribe('documents')
        this.documents =autorun(() => DocumentsCollection.find({}).fetch()).result
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkScreenSize);
    },
    methods: {
        checkScreenSize() {
            this.isSmallScreen = window.innerWidth <= 768; 
        },
        searchHandler(query) {
            this.search = query.trim() !== '';
            // fetch('http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/queries/nodes?term=dummy', {
            //     method: 'GET',
            //     mode: 'cors', 
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //   })
            //     .then(response => response.json())
            //     .then(data => console.log(data))
            //     .catch(error => console.error('Error:', error));
        },
        formattedDate(dateString) {
            const dateWithoutTime = dateString.split(' ')[0] + ' ' + dateString.split(' ')[1] + ' ' + dateString.split(' ')[2];
            return dateWithoutTime;
        }
        
    },
    watch: {
        // query(newQuery) {
        //   this.search = newQuery.trim() !== ''; // Set search to true if query is not empty after trimming whitespace
        // }
    },
    computed: {
       
       
    },
}
