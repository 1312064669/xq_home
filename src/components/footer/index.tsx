
/*
* @Author: dushuai
* @Date: 2024-02-21 17:03:39
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-11 16:34:21
* @description: footer
*/
import { NuxtLink } from "#components"

export default defineComponent({
  name: 'Footer',
  setup() {
    return () => (
      <div class="absolute lg:fixed bottom-0 lg:w-full py-2 bg-[#ffffff30] flex justify-center items-center flex-col lg:flex-row text-gray-300 w-[calc(100%+2rem)] ml-[-1rem] lg:ml-0">
        <div>Copyright&nbsp;&copy; 2024 - {new Date().getFullYear()} <NuxtLink href="https://xinqiangdai.cn/" class="hover:text-white">XinQ</NuxtLink>.</div>
        <div class="hidden lg:block">&nbsp;&nbsp;&&nbsp;&nbsp;</div>
        <div>Powered by <NuxtLink href="https://github.com/dshuais" target="_blank" class="hover:text-white">dshuais</NuxtLink>.</div>
        <div class="hidden lg:block">&nbsp;&nbsp;&&nbsp;&nbsp;</div>
        <div><NuxtLink href="https://beian.miit.gov.cn" target="_blank" class="hover:text-white">鲁ICP备2024083223号</NuxtLink>.</div>
        <div class="hidden lg:block">&nbsp;&nbsp;&&nbsp;&nbsp;</div>
        <NuxtLink href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank" class="hover:text-white">鲁公网安备37011302000477号</NuxtLink>
      </div>
    )
  }
})
