<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

const flag = ref(false)
function change() {
	flag.value = !flag.value
}
</script>

<template>
	<div>Current Count: {{ counter.count }}</div>
	<div class="mb4 aaa">
		<el-button class="bbb" @click="change">
			{{ flag }}
		</el-button>
		<el-button type="primary" @click="counter.increment">
			Primary
		</el-button>
		<el-button type="success">
			Success
		</el-button>
		<el-button type="info">
			Info
		</el-button>
		<el-button type="warning">
			Warning
		</el-button>
		<el-button type="danger">
			Danger
		</el-button>
	</div>

	<div class="mb4">
		<el-button plain>
			Plain
		</el-button>
		<el-button type="primary" plain>
			Primary
		</el-button>
		<el-button type="success" plain>
			Success
		</el-button>
		<el-button type="info" plain>
			Info
		</el-button>
		<el-button type="warning" plain>
			Warning
		</el-button>
		<el-button type="danger" plain>
			Danger
		</el-button>
	</div>

	<div class="mb4">
		<el-button round>
			Round
		</el-button>
		<el-button type="primary" round>
			Primary
		</el-button>
		<el-button type="success" round>
			Success
		</el-button>
		<el-button type="info" round>
			Info
		</el-button>
		<el-button type="warning" round>
			Warning
		</el-button>
		<el-button type="danger" round>
			Danger
		</el-button>
	</div>
</template>

<style scoped lang="scss">
.aaa {
	margin: 10px;
	.bbb {
		margin-right: 10px;
	}
}
</style>
