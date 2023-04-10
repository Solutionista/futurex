package online.sterz.views.start;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.littemplate.LitTemplate;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.template.Id;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteAlias;
import online.sterz.views.MainLayout;

/**
 * A Designer generated component for the stub-tag template.
 *
 * Designer will add and remove fields with @Id mappings but does not overwrite
 * or otherwise change this file.
 */
@PageTitle("Start")
@Route(value = "start", layout = MainLayout.class)
@RouteAlias(value = "", layout = MainLayout.class)
@Tag("start-view")
@JsModule("./views/start/start-view.ts")
public class StartView extends LitTemplate {

    @Id
    private TextField name;

    @Id
    private Button sayHello;

    public StartView() {
        addClassName("block");
        sayHello.addClickListener(e -> {
            Notification.show("Hello " + name.getValue());
        });
    }
}
