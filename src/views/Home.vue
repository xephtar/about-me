<template>
  <div class="home">
    <h1>Home</h1>
    <CustomText tag="p" size="xlarge">XLarge Instance!</CustomText>
    <CustomText tag="p" size="large">Large Instance!</CustomText>
    <CustomText>Default!</CustomText>
    <CustomText tag="p" size="small">Small Instance!</CustomText>
    <CustomText tag="p" size="xsmall">XSmall Instance!</CustomText>
    <CustomText tag="p" size="xxsmall">XXSmall Instance!</CustomText>

    <CustomText class="a" tag="p">Colored Instance!</CustomText>
    <CustomText class="b" tag="p">Colored Instance!</CustomText>
    <CustomText class="c" tag="p">Colored Instance!</CustomText>
  </div>
</template>

<script>
import CustomText from '@/components/CustomText'

export default {
  name: 'Home',
  components: { CustomText },
  comments: {
    CustomText
  }
}
</script>

<style scoped>
h1 {
  color: red;

  @media (--t) {
    color: blue;
  }
}

.a {
  color: rgba(var(--jbb), 1);
}

.b {
  color: rgba(var(--ie3), 1);
}

.c {
  color: rgba(var(--i30), 1);
}
</style>
