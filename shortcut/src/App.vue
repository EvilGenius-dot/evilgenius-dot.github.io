<template>
    <n-config-provider :theme="darkTheme" class="size-full">
        <div class="relative w-full h-full">
            <FlickeringGrid
                class="pointer-events-none absolute left-0 top-0 inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
                :square-size="4" :grid-gap="6" color="#60A5FA" :max-opacity="0.5" :flicker-chance="0.1" />
            <div class="z-10 w-full h-full flex items-center justify-center flex-col">
                <h1 class="font-extrabold text-5xl mb-6">✨ 定制自助查询</h1>
                <VanishingInput class="mb-6" v-model="searchText" :placeholders="placeholders" @submit="search" />
                <div class="w-[576px] mb-6" v-show="progressShow">
                    <n-progress type="line" :percentage="percent" indicator-placement="inside" processing />
                </div>
                <div class="mb-6 gap-4 flex" v-show="searchShow">
                    <div>定制名称: {{ searchEnd.name }}</div>
                    <div>最新托管版本: {{ searchEnd.lastVersion }}</div>
                </div>
                <div class="w-[576px] mb-6" v-show="errorMessage">
                    <n-card title="抱歉" size="small">
                        <p>未查询到CID{{ searchText }}托管信息, 请确认CID是否输入正确, 或CID未托管, 如需托管请联系管理员。</p>
                    </n-card>
                </div>
                <div class="w-[576px] mb-6" v-show="searchShow">
                    <n-card title="Linux安装命令" size="small">
                        <pre
                            class="whitespace-pre-wrap break-words break-all bg-black rounded p-4">{{ searchEnd.install }}</pre>
                    </n-card>
                </div>
                <div class="w-[576px] mb-6 flex gap-5" v-show="searchShow">
                    <n-card class="cursor-pointer" size="small" @click="download('win')">
                        <div class="flex items-center justify-center flex-col gap-4">
                            <img src="@/assets/win.png" />
                            <p>Windows程序本体</p>
                        </div>
                    </n-card>
                    <n-card class="cursor-pointer" size="small" @click="download('linux')">
                        <div class="flex items-center justify-center flex-col gap-4">
                            <img src="@/assets/linux.png" />
                            <p>Linux程序本体</p>
                        </div>
                    </n-card>
                </div>
            </div>
        </div>
    </n-config-provider>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import FlickeringGrid from '@/components/FlickeringGrid.vue'
import VanishingInput from './components/VanishingInput.vue';
import { darkTheme } from 'naive-ui'


const searchText = ref('')
const percent = ref(0)
const progressShow = ref(false)
const searchShow = ref(false)
const errorMessage = ref(false)
const version = ref('获取中...')
const searchEnd = reactive({
    install: '',
    lastName: '',
    lastVersion: '',
    name: ''
})

let _cid = 0;

const placeholders = [
    "输入您的CID以查询托管安装链接或程序本体下载地址。",
    "CID就是您的定制编号"
];

const search = () => {
    _cid = searchText.value;
    searchRust(_cid)
}

const getVersion = () => {
    fetch(`https://api.github.com/repos/EvilGenius-dot/shortcut/contents/Readme/10/linux`)
        .then(res => res.json())
        .then(data => {
            if (data.status) {
                alert('获取版本号失败。')
            } else {
                let last = data[data.length - 1].name;
                let v = last.split('-')[1]
                version.value = v
            }
        })
}

const searchRust = (cid) => {
    progressShow.value = true
    searchShow.value = false
    errorMessage.value = false

    fetch(`https://api.github.com/repos/EvilGenius-dot/shortcut/contents/Readme/${cid}/linux`)
        .then(res => res.json())
        .then(data => {
            if (data.status) {
                errorMessage.value = true
            } else {
                searchEnd.install = `bash <(curl -s -L https://github.com/EvilGenius-dot/shortcut/raw/main/Readme/${cid}/install.sh)`
                searchEnd.lastName = data[data.length - 1].name;
                searchEnd.name = data[data.length - 1].name.split('-')[0]
                searchEnd.lastVersion = data[data.length - 1].name.split('-')[1]
                searchShow.value = true
            }

            percent.value = 100

            setTimeout(() => {
                progressShow.value = false
                percent.value = 0
            }, 1000);
        }).catch(e => {

            percent.value = 100

            setTimeout(() => {
                progressShow.value = false
                percent.value = 0
            }, 1000);
        })
}

const download = (mode) => {
    if (mode == 'win') {
        window.open(`https://github.com/EvilGenius-dot/shortcut/raw/refs/heads/main/Readme/${_cid}/windows/${searchEnd.lastName}.exe`, '_blank');
    } else {
        window.open(`https://github.com/EvilGenius-dot/shortcut/raw/refs/heads/main/Readme/${_cid}/linux/${searchEnd.lastName}`, '_blank');
    }
}

onMounted(() => {
    getVersion()
})

</script>

<style>
.n-progress-graph-line-indicator {
    color: rgba(255, 255, 255, .8) !important;
}
</style>