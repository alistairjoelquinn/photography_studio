<template>
  <div class="column">
    <div class="card">
      <div class="card-content roboto">
        <h2 class="title">Photo Title</h2>
        <h3 class="subtitle">Subtitle</h3>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <a href="#" class="button thumb-up">
            <i class="fa fa-thumbs-o-up"></i>
          </a>
        </div>
        <div class="card-footer-item">
          <a href="#" class="button thumb-down">
            <i class="fa fa-thumbs-o-down"></i>
          </a>
        </div>
        <div class="card-footer-item">
          <a href="#" class="button share">
            <i class="fa fa-retweet"></i>
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.roboto {
  font-family: "Roboto", sans-serif;
}
.thumb-up {
  background-color: $pale;
}
.thumb-down {
  background-color: $orange;
}
.share {
  background-color: $blue;
  color: antiquewhite;
}
</style>