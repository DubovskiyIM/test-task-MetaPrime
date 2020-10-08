<template>
  <div class="home">
    <h1>This is a home page</h1>
    <SelectComponent />
  </div>
</template>

<script>
import SelectComponent from '@/components/SelectComponent';

export default {
  name: 'Home',
  components: {
    SelectComponent
  }
};
</script>
