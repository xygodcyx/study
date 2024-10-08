# 函数

## 反函数

1. **关于直线 y=x 对称**
2. **单调性一致**
3. **奇偶性相同**
4. **偶函数不存在反函数**

## 复合函数

# 极限

## 数列的极限

### 极限的概念

`边界`
是否有边界(不是无穷) 就是函数的值不能超过某一个数
是否有收敛就是是否存在极限
是否趋近于非无穷的值  有边界不一定有极限 但是有极限一定有边界  即有边界是有极限的必要条件
单调有界是有极限的

`极限值`
具体的极限值 (无穷不是极限值)

### 求极限的方法

`夹逼准则`
分子不变,分母取最大yn,小的
分子不变,分母取最小zn,大的
求极限技巧:分子分母同时除以次方最大的
夹逼准则:求比它小的极限和比它大的极限,那就得到了它的极限,因为有极限,所以肯定是一样的

## 函数的极限

### 极限的概念

同上(可以这么说,知道怎么回事就行)
    但是函数的自变量:大于0,小于0.要相等,才有极限,如果不相等,那么就不存在

**函数在某点存在极限的条件是左极限和右极限同时存在且相等**

即使函数在某点没有定义(*去心领域*),但是依然可以讨论它的极限

如果在某点有定义,那么有这么几种情况

1. 连续

   函数在这个点(x0)不会断,一直连绵不断,不特殊

   那极限就存在

   并且有:lim fx = fx0

2. 在某一侧连续,但是在另一侧不连续

   那就不存在

3. 如果两侧都断开

   那就不存在

4. 还有一种就是如果函数是连续的,但是就只有在这一点不连续(这一点是空的)

   比如这种:

   <img src="./imgs/math/函数极限的概念.png" alt="函数极限的概念" />

   因为这个在点两侧的函数值是相等的,所以极限存在,但是不等于fx0

### 函数的求极限方法

1. **直接代入法:趋近于什么,就带入什么**

有四则运算:

<img src="./imgs/math/函数极限的四则运算.png" alt="函数极限的四则运算" />

**前提是趋向一致**

就是趋向2就要都趋向2,不能一个趋向1一个趋向2.

​**直接带入出不来结果的,叫未定式**

因式分解 xn - 1

<img src="./imgs/math/an-bn的快捷展开.png" alt="an-bn的快捷展开" />

复合函数的运算法则:
<img src="./imgs/math/复合函数的极限运算法则.png" alt="复合函数的极限运算法则" />

一些未定式的解决方法:

1. 能因式分解的因式分解
2. 有根号的消根号
3. 有多项式的抓大头 上大无穷下大0 次数相同系数(最大的次方)比

<img src="./imgs/math/一些未定式的解决方法.png" alt="一些未定式的解决方法" />
