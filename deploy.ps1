
pushd angular

Write-Output "building angular"
ng build

popd

copy -Recurse -Force angular/dist/angular static