<template>
  <div
    :style="styleProps"
    class="l-shape-component"
    @click.prevent="handleClick"
  ></div>
</template>

<script setup lang="ts">
import useComponentCommon from "@/hooks/useComponentCommon";
import {
  transformToComponentProps,
  shapeDefaultProps,
  shapeStylePropsNames,
} from "@/defaultProps";
const defaultProps = transformToComponentProps(shapeDefaultProps);

const props = defineProps({
  ...defaultProps,
});

const { styleProps, handleClick } = useComponentCommon(
  props,
  shapeStylePropsNames
);
</script>

<style scoped></style>
