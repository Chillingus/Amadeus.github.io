BABYLON.SceneLoader.ImportMeshAsync("", "resources/", "i_just_want_my_style_bro.glb", scene).then(function(result) {
          result.meshes.forEach(function(mesh) {
            if (mesh.material) {
              if (mesh.material.emissiveColor === undefined) {
                mesh.material.emissiveColor = new BABYLON.Color3(1, 1, 1);
              }
              mesh.material.disableLighting = true;
            }
            mesh.position.y += 0.4;
          });
          scene.onBeforeRenderObservable.add(function() {
            result.meshes.forEach(function(mesh) {
              mesh.rotation.y += 0.05;
            });
          });
        });