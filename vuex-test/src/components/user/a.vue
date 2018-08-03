<template>
  <div>
    <table>
      <tbody>
        <tr id="trHead">
          <th>特价信息</th>
          <th width="30%">详情</th>
          <th width="10%">特惠价格</th>
          <th width="10%">入住信息</th>
          <th width="10%">抢购</th>
        </tr>
        <tr v-for="(info,key,index) in infos" :key="index">
          <td>{{info.info}}</td>
          <td>{{info.detail}}</td>
          <td>{{info.prize}}</td>
          <td>{{info.date}}</td>
          <td>{{info.buy}}</td>
          <td><button>抢购</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    data () {
      return {
        name:"I'm user a",
        infos:[
          {'info':'【特价转卖】6.6芙拉瓦丽7天5晚低价甩¥14999/人','detail':'行程天数：7天5晚','prize':'14999.00元/人','date':'2018-06-06'},
          {'info':'【特价转卖】6.6芙拉瓦丽7天5晚低价甩¥14999/人','detail':'行程天数：7天5晚','prize':'14999.00元/人','date':'2018-06-06'},
          {'info':'【特价转卖】6.6芙拉瓦丽7天5晚低价甩¥14999/人','detail':'行程天数：7天5晚','prize':'14999.00元/人','date':'2018-06-06'},
          {'info':'【特价转卖】6.6芙拉瓦丽7天5晚低价甩¥14999/人','detail':'行程天数：7天5晚','prize':'14999.00元/人','date':'2018-06-06'},
          {'info':'【特价转卖】6.6芙拉瓦丽7天5晚低价甩¥14999/人','detail':'行程天数：7天5晚','prize':'14999.00元/人','date':'2018-06-06'},
          {'info':'【特价转卖】6.6芙拉瓦丽7天5晚低价甩¥14999/人','detail':'行程天数：7天5晚','prize':'14999.00元/人','date':'2018-06-06'},
          {'info':'【特价转卖】6.6芙拉瓦丽7天5晚低价甩¥14999/人','detail':'行程天数：7天5晚','prize':'14999.00元/人','date':'2018-06-06'},
          {'info':'【特价转卖】6.6芙拉瓦丽7天5晚低价甩¥14999/人','detail':'行程天数：7天5晚','prize':'14999.00元/人','date':'2018-06-06'},
          {'info':'【特价转卖】6.6芙拉瓦丽7天5晚低价甩¥14999/人','detail':'行程天数：7天5晚','prize':'14999.00元/人','date':'2018-06-06'},
          {'info':'【特价转卖】6.6芙拉瓦丽7天5晚低价甩¥14999/人','detail':'行程天数：7天5晚','prize':'14999.00元/人','date':'2018-06-06'},
          {'info':'【特价转卖】6.6芙拉瓦丽7天5晚低价甩¥14999/人','detail':'行程天数：7天5晚','prize':'14999.00元/人','date':'2018-06-06'},
        ]
      }
    }
  }
</script>

<style scoped type='text/css'>
table {
  width: 100%;
}
tr {
  white-space: nowrap;
}
td{
  border-bottom: 1px solid ghostwhite;
  line-height: 2;
}
</style>