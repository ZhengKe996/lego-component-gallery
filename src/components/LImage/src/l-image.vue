<template>
  <img
    :style="styleProps"
    class="l-image-component"
    @click.prevent="handleClick"
    :src="src"
  />
</template>

<script setup lang="ts">
import useComponentCommon from "@/hooks/useComponentCommon";
import {
  transformToComponentProps,
  imageDefaultProps,
  imageStylePropsNames,
} from "@/defaultProps";
const defaultProps = transformToComponentProps(imageDefaultProps);

const props = defineProps({
  ...defaultProps,
});

const { styleProps, handleClick } = useComponentCommon(
  props,
  imageStylePropsNames
);
</script>

<style scoped></style>
