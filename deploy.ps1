
pushd angular

Write-Output "building angular"
ng build

popd

copy -Recurse angular/dist/angular static