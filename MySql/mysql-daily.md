# MySql学习文档

## 一、时间处理函数

1. `DATE_ADD(date,INTERVAL expr type)`：向日期添加指定时间间隔，其中`expr`是时间间隔，`type`为以下时间值`SECOND`,`MINUTE`,`HOUR`,`DAY`,`MONTH`,`QUARTER`,`YEAR`等；
2. `DATE_SUB(date,INTERVAL expr type)`：向日期减去指定时间间隔；
3. `DATE_FORMAT(date,format)`:以不同格式显示日期、时间；
4. `TO_DAYS(date)`：计算从0年开始到给定时间的**天数**；

  ``` sql
    -- 今天
    select * from abnormal_online where to_days(subDay) = to_days(now()); 
    select * from abnormal_online where date_format(subDay,'%Y-%M-%D') = date_format(now(),'%Y-%M-%D');
    select * from abnormal_online where datediff(subDay,now()) = 0;
    -- 近7天
    select * from abnormal_online where subDay >= date_sub(now(),INTERVAL 7 DAY);
    select * from abnormal_online where datediff(subDay,now()) <=0 and datediff(subDay,now()) > -7;
    -- 某天
    select * from abnormal_online where date_format(subDay,'%Y-%M-%D') = date_format('2022-09-07','%Y-%M-%D');
    select * from abnormal_online where datediff(subDay,'2022-09-13') = 0;
    -- 某天到某天(以零点计算)
    select * from abnormal_online where subDay between '2022-09-07' and '2022-09-14';
    select * from abnormal_online where subDay >= '2022-09-07' and subDay <= '2022-09-14 20:00:00';
    -- 本周
    select * from abnormal_online where yearweek(NOW()) = yearweek(subDay);
    -- 上周
    select * from abnormal_online where yearweek(subDay) = (yearweek(NOW()) - 1);
    -- 本月
    select * from abnormal_online where date_format(now(),'%Y-%M') = date_format(subDay,'%Y-%M');
    -- 上月
    select * from abnormal_online where date_format(subDay,'%Y-%M') = date_format(date_sub(now(),INTERVAL 1 MONTH),'%Y-%M');
    -- 本季度
    select * from abnormal_online where quarter(subDay) = quarter(now());
    -- 上季度
    select * from abnormal_online where quarter(subDay) = quarter(date_sub(now(),INTERVAL 1 quarter));
    -- 本年
    select * from abnormal_online where year(subDay) = year(now());
    -- 去年
    select * from abnormal_online where year(subDay) = year(date_sub(now(),INTERVAL 1 year));
    -- 判断是否为数字
    select (year(now()) REGEXP '[0-9]*');
  ```
