export default {
    data(){
        return{
            contact:[
                {
                    imgUrl:"https://cdn.builder.io/api/v1/image/assets/TEMP/2b2c2dc9354af841264927da988c0d9a38ff4602be776020f61042091bb6e162?apiKey=b77f07679fcf45ae9688b8885c4edc21&",
                    contact:"0416-228-2730"
                },
                {
                    imgUrl:"https://cdn.builder.io/api/v1/image/assets/TEMP/2b2c2dc9354af841264927da988c0d9a38ff4602be776020f61042091bb6e162?apiKey=b77f07679fcf45ae9688b8885c4edc21&",
                    contact:"e-learning@cmcvellore.ac.in"
                },
                {
                    imgUrl:"https://cdn.builder.io/api/v1/image/assets/TEMP/2b2c2dc9354af841264927da988c0d9a38ff4602be776020f61042091bb6e162?apiKey=b77f07679fcf45ae9688b8885c4edc21&",
                    contact:"EITU - CMC Vellore"
                }

            ],
            bgImgLight: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3e4bf73ab23117946895f223b04abbf295f7ab02b1ab29290f3f5ada5f4e998?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e4bf73ab23117946895f223b04abbf295f7ab02b1ab29290f3f5ada5f4e998?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e4bf73ab23117946895f223b04abbf295f7ab02b1ab29290f3f5ada5f4e998?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e4bf73ab23117946895f223b04abbf295f7ab02b1ab29290f3f5ada5f4e998?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e4bf73ab23117946895f223b04abbf295f7ab02b1ab29290f3f5ada5f4e998?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e4bf73ab23117946895f223b04abbf295f7ab02b1ab29290f3f5ada5f4e998?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e4bf73ab23117946895f223b04abbf295f7ab02b1ab29290f3f5ada5f4e998?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e4bf73ab23117946895f223b04abbf295f7ab02b1ab29290f3f5ada5f4e998?apiKey=b77f07679fcf45ae9688b8885c4edc21&",
            Logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/33a581065ff95e420b70e6d46cc9df9d844e7f466b44fd52b41cd595420be731?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a581065ff95e420b70e6d46cc9df9d844e7f466b44fd52b41cd595420be731?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a581065ff95e420b70e6d46cc9df9d844e7f466b44fd52b41cd595420be731?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a581065ff95e420b70e6d46cc9df9d844e7f466b44fd52b41cd595420be731?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a581065ff95e420b70e6d46cc9df9d844e7f466b44fd52b41cd595420be731?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a581065ff95e420b70e6d46cc9df9d844e7f466b44fd52b41cd595420be731?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a581065ff95e420b70e6d46cc9df9d844e7f466b44fd52b41cd595420be731?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a581065ff95e420b70e6d46cc9df9d844e7f466b44fd52b41cd595420be731?apiKey=b77f07679fcf45ae9688b8885c4edc21&",
            Folder:"https://cdn.builder.io/api/v1/image/assets/TEMP/485e948b20be6074e39c3628cae0844d5dca99da561cca77249181abda9a43dd?apiKey=b77f07679fcf45ae9688b8885c4edc21&",
            isSmallScreen: false
        }
    },
    mounted() {
    this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkScreenSize);
    },
    methods: {
        checkScreenSize() {
            this.isSmallScreen = window.innerWidth <= 768; 
        }
    },
    computed: {
        pageTitle() {
          return this.isSmallScreen ? 'Login' : 'CMC Council Portal Login' ;
        }
      }
}
