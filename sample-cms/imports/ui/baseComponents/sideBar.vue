<script>
export default{
    data(){
        return{
            Logo:"https://cdn.builder.io/api/v1/image/assets/TEMP/168622c9c212e41bf09458f78ed79a28208216771c6a4905a337be0aaa6b9ec3?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/168622c9c212e41bf09458f78ed79a28208216771c6a4905a337be0aaa6b9ec3?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/168622c9c212e41bf09458f78ed79a28208216771c6a4905a337be0aaa6b9ec3?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/168622c9c212e41bf09458f78ed79a28208216771c6a4905a337be0aaa6b9ec3?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/168622c9c212e41bf09458f78ed79a28208216771c6a4905a337be0aaa6b9ec3?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/168622c9c212e41bf09458f78ed79a28208216771c6a4905a337be0aaa6b9ec3?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/168622c9c212e41bf09458f78ed79a28208216771c6a4905a337be0aaa6b9ec3?apiKey=b77f07679fcf45ae9688b8885c4edc21&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/168622c9c212e41bf09458f78ed79a28208216771c6a4905a337be0aaa6b9ec3?apiKey=b77f07679fcf45ae9688b8885c4edc21&",
            Folder:"https://cdn.builder.io/api/v1/image/assets/TEMP/c714d1ac4cd22bddc02656d3727bf8e1c63b31bfe045a398959010449382bfd1?apiKey=b77f07679fcf45ae9688b8885c4edc21&",
        }
    }
}
</script>

<template>
  <div class="sidebar">
    <img loading="lazy" :srcSet="Logo" class="logo" />
    <img loading="lazy" :src="Folder" class="folder" />
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  align-items: center;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  background-color: var(--navyBlue);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 31px 23px 50px;
  // height: calc(100% - 80px);
  .logo {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 82px;
    overflow: hidden;
  }
  .folder {
    width: 29px;
    overflow: hidden;
    max-width: 100%;
  }
}
</style>
