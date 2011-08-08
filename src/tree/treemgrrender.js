/**
 * tree management utils render
 * @author yiminghe@gmail.com
 */
KISSY.add("tree/treemgrrender", function(S) {
    var FOCUSED_CLS = "tree-item-focused";

    function TreeMgrRender() {
    }

    TreeMgrRender.ATTRS = {
        // 默认 true
        // 是否显示根节点
        showRootNode:{
        }
    };

    S.augment(TreeMgrRender, {
        __renderUI:function() {
            this.get("el").addClass(this.getCls("tree-root")).attr("role", "tree")[0]['hideFocus'] = true;
            this.get("rowEl").addClass(this.getCls("tree-root-row"));
        },

        _uiSetShowRootNode:function(v) {
            this.get("rowEl")[v ? "show" : "hide"]();
        },

        _uiSetFocused:function(v) {
            this.get("el")[v ? "addClass" : "removeClass"](this.getCls(FOCUSED_CLS));
        }
    });

    if (1 > 2) {
        TreeMgrRender._uiSetShowRootNode();
    }

    return TreeMgrRender;
});