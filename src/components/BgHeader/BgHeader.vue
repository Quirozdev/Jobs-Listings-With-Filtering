<template>
  <header>
    <picture>
      <source
        media="(max-width: 375px)"
        srcset="../../../public/images/bg-header-mobile.svg"
      />
      <img
        src="../../../public/images/bg-header-desktop.svg"
        alt="Header Background"
      />
    </picture>
  </header>
</template>

<style scoped>
header {
  background-color: var(--desaturated-dark-cyan);
  height: 10vh;
  display: flex;
  flex-direction: column;
}

picture {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

picture > img {
  flex: 1;
  display: block;
  max-width: 100%;
}
</style>
