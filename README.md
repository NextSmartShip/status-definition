# NextSmartShip Status Definition

Status definition for tables


## Usage

### npm install

eg
```
  cd new-oms-ui/
  npm install https://github.com/NextSmartShip/status-definition  --save
```

### import package
eg
```
import statusDefinition from 'status-definition';
```

### use status definition
eg
```
const ORDER_STATUSES = statusDefinition.order.status
const ORDER_CANCEL_STATUSES = statusDefinition.order.cancelStatus
const PRODUCT_STATUSES = statusDefinition.product.status
```

### development
when you added or updated some status definition, you can use follow command to test at you local
eg
```
cd new-oms-ui/
npm install ../status-definition --save
```
after the test is finished, commit you code, and update the package version, you can follow those steps

eg
```
cd status-definition/
git add .
git commit 
git push

cd new-oms-ui/
npm install https://github.com/NextSmartShip/status-definition  --save
```