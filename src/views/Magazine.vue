<template>
  <div class="magazine">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>This is magazine page</h1>
    <div id="magazines">
      <article>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae corrupti voluptates veniam illum debitis maiores obcaecati officiis laborum cumque ipsum doloribus ipsam, maxime consequuntur natus labore. Exercitationem voluptates necessitatibus animi esse, deserunt tempora placeat quam laborum odio ipsa. Ab deleniti labore officiis quas iste ducimus. Laboriosam corporis laudantium eius quae.</p>
      </article>
      <article>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt beatae, assumenda dicta, dignissimos possimus eligendi sequi quo ea, architecto necessitatibus voluptatibus inventore nostrum. Praesentium obcaecati dolor excepturi placeat, neque et impedit non. Nihil?</p>
      </article>
    </div>
  </div>
</template>
<style scoped>
.magazine{
  width: 70%;
  margin: 0 auto;
}
#magazines{
  display: flex;
}
article{
  border: 1px solid black;
  padding: 10px;
  margin: 20px;
}
</style>