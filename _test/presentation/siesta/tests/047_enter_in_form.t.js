StartTest(function(t) {

    t.testBrowser(function (t) {
        document.body.innerHTML = '<form id="fo" method="post"><input id="txt" type="text"></form>';
        var form = document.getElementById('fo');

        form.onsubmit = function() { return false; };

        t.isCalledOnce("onsubmit", form, 'Expect a form to be posted on ENTER press');

        t.chain(
            {
                action      : 'type',
                target      : '#txt',
                text        : 'Hello[ENTER]'
            }
        )
    });
});

