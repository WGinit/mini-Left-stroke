### 微信小程序列表单项左划组件

#### 如何使用
> git clone

> page页面中注册leftstorke组件，引入即可

#### 参数配置
| 参数    | 类型   |  默认值  |  必填  |  说明 |
| :----: | :-----:  | :----:  |  :--: |  :---: |
| list   | Array |   []  |  是  |  列表数据数组 |
| optionText    |   String   |  '删除'  |  是   |  右侧button显示文字  |
| bindjump    |  Function  |   |  否   |  点击列表单项事件  |
| bindoption  | Function   |  |  否   |  点击右侧编辑button事件 |

#### 实现原理：
>  根据事件bindtouchstart， bindtouchmove，bindtouchend来扑捉手指移动距离及方向

>  左划触发条件： 1、单指滑动； 2、水平滑动； 3、滑动距离大于编辑按钮的一半宽度

#### 效果图如下
!['效果gif'](https://raw.githubusercontent.com/WGinit/Assets/master/project/images/leftStorke.gif)