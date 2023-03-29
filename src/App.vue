<script setup>
import { useTotalStore } from '@/stores/totalData'

const useTotal = useTotalStore()
useTotal.getTotalData()
</script>

<template>
	<router-view />
</template>