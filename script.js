const Foundry = {
    updateProgress() {
        const val = document.getElementById('scope-select').value;
        document.getElementById('progress-fill').style.width = val + '%';
        document.getElementById('completion-perc').innerText = val + '%';
    },

    uplink() {
        const data = {
            project: "FOUNDRY_NODE_CAPTURE",
            status: document.getElementById('completion-perc').innerText,
            total: document.getElementById('final-total').innerText,
            timestamp: new Date().toLocaleTimeString()
        };
        
        console.log("UPLINKING TO ESTIMATOR:", data);
        alert(`UPLINK SUCCESSFUL\nData manifested for Office Estimator.`);
    }
};

