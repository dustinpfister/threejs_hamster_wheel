var HamsterWheel = (function () {

    // the Wheel constructor
    var Wheel = function () {

        // a group that will hold all mesh objects
        this.group = new THREE.Group();
        this.wheel = new THREE.Group();

        this.group.add(this.wheel);

        var geo = new THREE.TorusGeometry(2, .125, 20, 20);

        // RIMS
        var ct = 2,
        rim,
        i = 0;
        while (i < ct) {

            rim = new THREE.Mesh(

                    geo,

                    new THREE.MeshBasicMaterial({

                        color: 0x00ff00
                    }));
            rim.position.set(0, 0, -2 + 2 * i);

            this.wheel.add(rim);

            var bar = new THREE.Mesh(

                    new THREE.CylinderGeometry(.125, .125, 4),

                    new THREE.MeshBasicMaterial({

                        color: 0x00ff00
                    }));
            bar.position.set(0, 0, -2 + 2 * i);

            this.wheel.add(bar);

            i += 1;
        }

        var ct = 15,
        rim,
        i = 0;
        while (i < ct) {

            var r = Math.PI * 2 / ct * i;

            // TUBES connecting rims
            var cy = new THREE.Mesh(

                    new THREE.CylinderGeometry(.125, .125, 2),

                    new THREE.MeshBasicMaterial({

                        color: 0x00ff00
                    }));
            cy.rotation.x = Math.PI / 2;

            cy.position.x = Math.cos(r) * 2;
            cy.position.y = Math.sin(r) * 2;
            cy.position.z = -1;

            this.wheel.add(cy);

            i += 1;

        }

    };

    // just return an instance of wheel for now
    return Wheel;

}
    ());
